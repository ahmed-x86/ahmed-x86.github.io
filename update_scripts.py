import os

# قائمة ملفات الخلفيات المتبقية
wallpaper_files = [
    "wallpaper_4.html",
    "wallpaper_5.html",
    "wallpaper_6.html",
    "wallpaper_7.html"
]

# النص الذي نبحث عنه (نهاية الفوتر وبداية قفلة الجسم)
old_pattern = '</footer>\n\n</body>'
# النص الجديد مع إضافة سكريبت الجافاسكريبت
new_pattern = '</footer>\n\n<script src="main.js"></script>\n</body>'

for filename in wallpaper_files:
    if os.path.exists(filename):
        with open(filename, 'r', encoding='utf-8') as file:
            content = file.read()

        # استبدال النمط القديم بالجديد
        # استخدمنا replace للنمط المكتوب، وسأضيف استبدالاً آخر احتياطياً في حال عدم وجود أسطر فارغة
        updated_content = content.replace('</footer>\n</body>', '</footer>\n<script src="main.js"></script>\n</body>')
        updated_content = updated_content.replace('</footer>\n\n</body>', new_pattern)

        if content != updated_content:
            with open(filename, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            print(f"✅ تم ربط main.js بنجاح في: {filename}")
        else:
            # تحقق إضافي في حالة كان الملف مربوطاً بالفعل
            if 'src="main.js"' in content:
                print(f"⚠️ الملف {filename} مربوط بالفعل.")
            else:
                print(f"❓ لم يتم العثور على قفلة الفوتر بشكلها المتوقع في {filename}")
    else:
        print(f"❌ الملف غير موجود: {filename}")

print("\n🚀 اكتملت المهمة! جرب الآن التنقل بين صفحات الخلفيات.")