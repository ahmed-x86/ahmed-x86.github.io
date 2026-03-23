import subprocess
import time
import random

files_to_commit = [
    "Mobile_Charge_Indicator_Waybar.html",
    "gh_radar.html",
    "hyprland_dotfiles.html",
    "index.html",
    "script.js",
    "signin_signup.html",
    "wallpaper.html",
    "wallpaper_2.html",
    "wallpaper_3.html",
    "wallpaper_4.html",
    "wallpaper_5.html",
    "wallpaper_6.html",
    "wallpaper_7.html",
    "waybar_hijri_calendar.html",
    "main.js", 
    "linux_gatherings.html"
]

print("🚀 بدء عملية الإضافة، الكوميت، والرفع (Push) مع فواصل زمنية عشوائية...\n")

for i, file in enumerate(files_to_commit):
    print(f"⏳ جاري معالجة الملف ({i+1}/{len(files_to_commit)}): {file}")
    
    
    subprocess.run(["git", "add", file])
    
    
    commit_msg = f"edit {file}"
    subprocess.run(["git", "commit", "-m", commit_msg])
    
    
    print(f"🌍 جاري رفع {file} إلى GitHub...")
    result = subprocess.run(["git", "push", "origin", "main"])
    
    if result.returncode == 0:
        print(f"✅ تم رفع {file} بنجاح!")
    else:
        print(f"❌ حدث خطأ أثناء رفع {file}.")

    
    if i < len(files_to_commit) - 1:
        wait_time = random.randint(10, 55)
        print(f"😴 سأنتظر {wait_time} ثانية قبل الملف التالي...")
        time.sleep(wait_time)
        
    print("-" * 50)

print("\n🎉 تم الانتهاء من العملية بالكامل!")
