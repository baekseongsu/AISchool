import cv2

src = 0
video = cv2.VideoCapture(0)
video.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
video.set(cv2.CAP_PROP_FRAME_HEIGHT, 360)
while video.isOpened():
    ret, frame = video.read()

    cv2.imshow('Camera Window', cv2.flip(frame, 1))
    if cv2.waitKey(25) == ord('q'):
        print("카메라 종료")
        break


video.release
cv2.destroyAllWindows()