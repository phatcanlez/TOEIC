import pdfplumber
import fitz  # PyMuPDF
import pytesseract
from PIL import Image
import io
import os
import sys
import traceback

# Fix Windows console encoding for Vietnamese characters
os.environ["PYTHONUTF8"] = "1"
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
sys.stderr.reconfigure(encoding='utf-8', errors='replace')

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
OCR_LANG = "eng+vie"
OCR_DPI = 200

BASE_ETS = r"d:\phat\TOEIC\Support\ETS\TỔNG HỢP ETS"
BASE_BOOK = r"d:\phat\TOEIC\Support\book"
OUTPUT_FILE = r"d:\phat\TOEIC\Support\TOEIC_ALL_CONTENT.md"

# Define PDF files in order, grouped by year/source
pdf_groups = [
    # === BOOK ===
    ("TOEIC Preparation - Volume 1", os.path.join(BASE_BOOK, "Toeic Preparation volume 1.pdf")),
    ("TOEIC Preparation - Volume 2", os.path.join(BASE_BOOK, "Toeic preparation 2.pdf")),

    # === ETS 2018 ===
    ("ETS 2018 - Listening", os.path.join(BASE_ETS, "ETS 2018", "ETS TOEIC 2018 - Listening.pdf")),
    ("ETS 2018 - Reading", os.path.join(BASE_ETS, "ETS 2018", "ETS TOEIC 2018 - Reading.pdf")),

    # === ETS 2019 ===
    ("ETS 2019 - Listening (1000 LC)", os.path.join(BASE_ETS, "ETS 2019", u"Sách ETS 1000 LC (2019).pdf")),
    ("ETS 2019 - Reading (1000 RC)", os.path.join(BASE_ETS, "ETS 2019", u"Sách ETS 1000 RC (2019).pdf")),
    ("ETS 2019 - Key LC", os.path.join(BASE_ETS, "ETS 2019", "Key LC .pdf")),

    # === ETS 2020 ===
    ("ETS 2020 - Listening", os.path.join(BASE_ETS, "ETS 2020", u"Ets 2020 - sách LC.pdf")),
    ("ETS 2020 - Key & Transcript LC", os.path.join(BASE_ETS, "ETS 2020", "Key _ Transcript LC.pdf")),

    # === ETS 2021 ===
    ("ETS 2021 - Listening", os.path.join(BASE_ETS, "ETS 2021", "LC ETS summer 2021.pdf")),
    ("ETS 2021 - Reading", os.path.join(BASE_ETS, "ETS 2021", "RC ETS summer 2021.pdf")),
    ("ETS 2021 - LC Script", os.path.join(BASE_ETS, "ETS 2021", "LC-scipt.pdf")),
    ("ETS 2021 - RC Script", os.path.join(BASE_ETS, "ETS 2021", "RC-scipt.pdf")),

    # === ETS 2022 ===
    ("ETS 2022 - Reading Full", os.path.join(BASE_ETS, "ETS 2022", "ets 2022 - RC full.pdf")),

    # === ETS 2023 ===
    ("ETS 2023 - Listening (Full)", os.path.join(BASE_ETS, "ETS 2023", "ETS 2023 LC.pdf")),
    ("ETS 2023 - Reading (Full)", os.path.join(BASE_ETS, "ETS 2023", "ETS 2023 RC.pdf")),
    ("ETS 2023 - Transcript LC (Full)", os.path.join(BASE_ETS, "ETS 2023", "ETS 2023 Transcript LC.pdf")),
    ("ETS 2023 - Test 1", os.path.join(BASE_ETS, "ETS 2023", "TEST 1", "ETS 2023 Test 1.pdf")),
    ("ETS 2023 - Test 1 Transcript", os.path.join(BASE_ETS, "ETS 2023", "TEST 1", "Transcript Test 1.pdf")),
    ("ETS 2023 - Test 2", os.path.join(BASE_ETS, "ETS 2023", "TEST 2", "Test 02 ETS 2023 Reading & Listening.pdf")),
    ("ETS 2023 - Test 2 Transcript", os.path.join(BASE_ETS, "ETS 2023", "TEST 2", "Test 2 transcript.pdf")),
    ("ETS 2023 - Test 3", os.path.join(BASE_ETS, "ETS 2023", "TEST 3", "TEST 3.pdf")),
    ("ETS 2023 - Test 4", os.path.join(BASE_ETS, "ETS 2023", "TEST 4", "TEST 4.pdf")),
    ("ETS 2023 - Test 5", os.path.join(BASE_ETS, "ETS 2023", "TEST 5", "TEST 5.pdf")),
    ("ETS 2023 - Test 6", os.path.join(BASE_ETS, "ETS 2023", "TEST 6", "TEST 6.pdf")),
    ("ETS 2023 - Test 7", os.path.join(BASE_ETS, "ETS 2023", "TEST 7", "TEST 7.pdf")),
    ("ETS 2023 - Test 8", os.path.join(BASE_ETS, "ETS 2023", "TEST 8", "TEST 8.pdf")),
    ("ETS 2023 - Test 9", os.path.join(BASE_ETS, "ETS 2023", "TEST 9", "TEST 9.pdf")),
    ("ETS 2023 - Test 10", os.path.join(BASE_ETS, "ETS 2023", "TEST 10", "TEST 10.pdf")),

    # === ETS 2024 ===
    ("ETS 2024 - Listening", os.path.join(BASE_ETS, "ETS 2024", "ets 2024 LC.pdf")),
    ("ETS 2024 - Reading", os.path.join(BASE_ETS, "ETS 2024", "ets 2024 RC.pdf")),

    # === ETS 2026 ===
    ("ETS 2026 - Listening", os.path.join(BASE_ETS, "ETS 2026", "LISTENING ETS 2026.pdf")),
    ("ETS 2026 - Reading", os.path.join(BASE_ETS, "ETS 2026", "READING ETS 2026.pdf")),
    ("ETS 2026 - Transcript", os.path.join(BASE_ETS, "ETS 2026", "TRANSCRIPT.pdf")),
    ("ETS 2026 - Key RC", os.path.join(BASE_ETS, "ETS 2026", "key rc .pdf")),
]

def ocr_page_with_pymupdf(pdf_path, page_index):
    """Render one page via PyMuPDF and OCR it with pytesseract."""
    doc = fitz.open(pdf_path)
    try:
        page = doc[page_index]
        zoom = OCR_DPI / 72
        mat = fitz.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat)
        img = Image.open(io.BytesIO(pix.tobytes("png")))
        text = pytesseract.image_to_string(img, lang=OCR_LANG)
        return text
    finally:
        doc.close()

def extract_pdf_text(pdf_path):
    """Extract text from a PDF using pdfplumber, falling back to OCR per page."""
    text_parts = []
    ocr_count = 0
    try:
        with pdfplumber.open(pdf_path) as pdf:
            total = len(pdf.pages)
            for i in range(total):
                page = pdf.pages[i]
                text = page.extract_text()
                if not text or not text.strip():
                    try:
                        text = ocr_page_with_pymupdf(pdf_path, i)
                        ocr_count += 1
                    except Exception as ocr_err:
                        text = f"**[LOI OCR TRANG {i+1}]**: {ocr_err}"
                if text and text.strip():
                    text_parts.append(f"<!-- Page {i+1}/{total} -->\n{text.strip()}")
                if (i + 1) % 25 == 0:
                    print(f"  ... processed {i+1}/{total} pages (OCR so far: {ocr_count})", flush=True)
    except Exception as e:
        text_parts.append(f"**[LOI KHI DOC FILE]**: {str(e)}")
        traceback.print_exc()
    print(f"  Total OCR'd pages: {ocr_count}", flush=True)
    return "\n\n".join(text_parts)

def main():
    print("=" * 60)
    print("TOEIC PDF EXTRACTION TOOL (with OCR fallback)")
    print("=" * 60)

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write("# TONG HOP TAI LIEU TOEIC - TOAN BO NOI DUNG\n\n")
        f.write("> File nay duoc tao tu dong tu toan bo sach ETS (2018-2026) va Toeic Preparation.\n")
        f.write("> Dung de on tap, tao bo de, va hoc tu vung voi AI.\n")
        f.write("> Cac trang scan/hinh anh da duoc OCR (eng+vie) de lay noi dung.\n\n")
        f.write("---\n\n")

        # Table of contents
        f.write("## MUC LUC\n\n")
        current_group = ""
        for title, path in pdf_groups:
            group = title.split(" - ")[0]
            if group != current_group:
                current_group = group
                f.write(f"\n### {group}\n")
            f.write(f"- {title}\n")
        f.write("\n---\n\n")

        # Extract each PDF
        total = len(pdf_groups)
        for idx, (title, path) in enumerate(pdf_groups, 1):
            print(f"\n[{idx}/{total}] Processing: {title}", flush=True)
            print(f"  File: {path}", flush=True)

            if not os.path.exists(path):
                print(f"  FILE NOT FOUND - SKIPPING", flush=True)
                f.write(f"## {title}\n\n")
                f.write(f"**[FILE KHONG TON TAI]**: `{path}`\n\n")
                f.write("---\n\n")
                continue

            file_size_mb = os.path.getsize(path) / (1024 * 1024)
            print(f"  Size: {file_size_mb:.1f} MB", flush=True)

            f.write(f"## {title}\n\n")
            f.write(f"> Source: `{os.path.basename(path)}` ({file_size_mb:.1f} MB)\n\n")

            text = extract_pdf_text(path)

            if text.strip():
                char_count = len(text)
                print(f"  OK Extracted {char_count:,} characters", flush=True)
                f.write(text)
            else:
                print(f"  WARNING No text extracted", flush=True)
                f.write("**[KHONG TRICH XUAT DUOC NOI DUNG]**\n")

            f.write("\n\n---\n\n")
            f.flush()

    output_size_mb = os.path.getsize(OUTPUT_FILE) / (1024 * 1024)
    print(f"\n{'=' * 60}")
    print(f"HOAN THANH!")
    print(f"Output: {OUTPUT_FILE}")
    print(f"Size: {output_size_mb:.1f} MB")
    print(f"{'=' * 60}")

if __name__ == "__main__":
    main()
