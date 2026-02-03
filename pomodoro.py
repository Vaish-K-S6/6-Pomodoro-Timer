import time

WORK_TIME = 25 * 60   # 25 minutes
BREAK_TIME = 5 * 60   # 5 minutes

def countdown(seconds, label):
    while seconds:
        mins = seconds // 60
        secs = seconds % 60
        print(f"{label} Time: {mins:02d}:{secs:02d}", end="\r")
        time.sleep(1)
        seconds -= 1
    print(f"\n{label} finished!")

while True:
    print("\n🕒 Pomodoro Timer")
    print("1. Start Work Session (25 min)")
    print("2. Start Break (5 min)")
    print("3. Exit")

    choice = input("Choose an option: ")

    if choice == "1":
        countdown(WORK_TIME, "Work")
    elif choice == "2":
        countdown(BREAK_TIME, "Break")
    elif choice == "3":
        print("Goodbye! Stay focused 💙")
        break
    else:
        print("Invalid choice. Try again.")
