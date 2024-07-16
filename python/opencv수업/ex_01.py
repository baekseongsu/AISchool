import cv2

image = cv2.imread('image/01_lena.png', cv2.IMREAD_COLOR)
cv2.imshow('Lenna', image)
cv2.waitKey(0)
cv2.destroyWindows()