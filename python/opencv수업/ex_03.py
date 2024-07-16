import cv2

video = cv2.VideoCapture("videos/01.MOV")

while cv2.waitKey(25) < 0:
    ret, frame = video.read()
    if not ret:
        print("Frame이 끝났습니다.")
        break

    cv2.imshow("stonei", frame)
    if cv2.waitKey(25) == ord('q'):
        print('동영상 종료')
        break

video.release()
cv2.destroyAllWindows()
cv2.waitKey(1)