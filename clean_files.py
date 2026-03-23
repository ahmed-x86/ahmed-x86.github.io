import os
import glob
import re

# هنجيب كل ملفات الـ HTML اللي في الفولدر الحالي
html_files = glob.glob("*.html")

print("🧹 جاري فحص الملفات وتنظيفها من رقم 1 الزائد...\n")

for filename in html_files:
    with open(filename, 'r', encoding='utf-8') as file:
        content = file.read()

    # الكود ده بيدور على </html> بعدها أي مسافات وبعدها رقم 1 في آخر الملف خالص
    # وبيستبدلها بـ </html> نظيفة
    new_content = re.sub(r'</html>\s*2\s*$', '</html>\n', content)

    # لو حصل تغيير (يعني لقى رقم 1 ومسحه)
    if new_content != content:
        with open(filename, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"✅ تم تنظيف الملف: {filename}")
    else:
        print(f"ℹ️ الملف سليم ومفيهوش 1: {filename}")

print("\n🎉 تم الانتهاء من تنظيف جميع الملفات!")