import cv2
from datetime import datetime
import easyocr


imagem = cv2.imread('src/public/simulate/car01.png')
cv2.imshow("Original", imagem)
path_images = "src/public/images/test_%s.png" % (datetime.now())
grayFrame = cv2.cvtColor(imagem, cv2.COLOR_BGR2GRAY)
(thresh, blackAndWhiteFrame) = cv2.threshold(
    grayFrame, 127, 255, cv2.THRESH_BINARY)

cv2.imwrite(path_images, blackAndWhiteFrame)
reader = easyocr.Reader(['ch_sim','en']) # need to run only once to load model into memory
result = reader.readtext(blackAndWhiteFrame)
print(result)