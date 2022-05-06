import cv2
from datetime import datetime
from analytics.index import (analytics)
from connections.api import (registerPlate)

def stream():
    camera = cv2.VideoCapture(0)
    return camera

def capture(frame):
    path_images="src/public/images/test_%s.png"%(datetime.now())
    #image_test = cv2.imread("src/public/simulate/car01.png")
    image_test = cv2.imread("src/public/img_plate_br/HPM9362.jpg")
    plate = analytics(image_test)
    # registerPlate(plate)
    return cv2.imwrite(path_images, image_test)

def train(frame):
    path_train="src/public/trains/placas/%s.png"%(datetime.now())
    grayFrame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    (thresh, blackAndWhiteFrame) = cv2.threshold(grayFrame, 127, 255, cv2.THRESH_BINARY)

    return cv2.imwrite(path_train,blackAndWhiteFrame)

