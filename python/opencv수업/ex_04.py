import cv2

cap = cv2.VideoCapture(0)

# 창 이름 지정
window_name = 'frame'

# 창 생성
cv2.namedWindow(window_name, cv2.WINDOW_NORMAL)

# 원하는 크기로 창 크기 조절 (예: 너비 800, 높이 600)
cv2.resizeWindow(window_name, 800, 600)

idx = 0
while True:
    ret, frame = cap.read()
    if not ret:
        break
    
    # 프레임 크기 조절
    ret = cap.set(cv2.CAP_PROP_FRAME_WIDTH, 720)
    ret = cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
    
    # 프레임을 창에 표시
    cv2.imshow(window_name, frame)
    
    key = cv2.waitKey(1)
    if key == ord('q'):
        break
    elif key == ord('c'):
        cv2.imwrite(f"./img/capture{idx}.jpg", frame)
        idx += 1

cap.release()
cv2.destroyAllWindows()
