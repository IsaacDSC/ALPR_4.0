import cv2
from datetime import datetime
from carPlate import anality

def stream():
    camera = cv2.VideoCapture(0)
    return camera


def capture(frame):
    anality()
    path_images="src/public/images/test_%s.png"%(datetime.now())
    grayFrame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    (thresh, blackAndWhiteFrame) = cv2.threshold(grayFrame, 127, 255, cv2.THRESH_BINARY)

    return cv2.imwrite(path_images, blackAndWhiteFrame)


def train(frame):
    path_train="src/public/trains/placas/%s.png"%(datetime.now())
    grayFrame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    (thresh, blackAndWhiteFrame) = cv2.threshold(grayFrame, 127, 255, cv2.THRESH_BINARY)

    return cv2.imwrite(path_train,blackAndWhiteFrame)