
import cv2
from datetime import datetime
import easyocr
from matplotlib import pyplot as plt
import numpy as np
import imutils
import pytesseract
import re

def defineBackGroundBlack(gray, img, location):
    mask = np.zeros(gray.shape, np.uint8)
    new_image = cv2.drawContours(mask, [location], 0, 255, -1)
    new_image = cv2.bitwise_and(img, img, mask=mask)
    plt.imshow(cv2.cvtColor(new_image, cv2.COLOR_BGR2RGB))
    return {'blackbackground':new_image, 'mask':mask}


def countFrames(frame):
    keypoints = cv2.findContours(
        frame.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
    contours = imutils.grab_contours(keypoints)
    contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]

    location = None
    for contour in contours:
        approx = cv2.approxPolyDP(contour, 10, True)
        if len(approx) == 4:
            location = approx
        break
    return location


def recortFrame(gray, mask):
    (x, y) = np.where(mask == 255)
    (x1, y1) = (np.min(x), np.min(y))
    (x2, y2) = (np.max(x), np.max(y))
    cropped_image = gray[x1:x2+1, y1:y2+1]
    return cropped_image


def convertMonochromatic(frameGray):
    bfilter = cv2.bilateralFilter(frameGray, 11, 17, 17)
    edged = cv2.Canny(bfilter, 30, 200)
    plt.imshow(cv2.cvtColor(edged, cv2.COLOR_BGR2RGB))
    return edged


def convertGray(frame):
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    plt.imshow(cv2.cvtColor(gray, cv2.COLOR_BGR2RGB))
    return gray


def plateMonochromatic(plate):
    (thresh, blackAndWhiteFrame) = cv2.threshold(
        plate, 127, 255, cv2.THRESH_BINARY)
    plt.imshow(cv2.cvtColor(blackAndWhiteFrame, cv2.COLOR_BGR2RGB))
    return blackAndWhiteFrame


def processText(frame):
    text = pytesseract.image_to_string(frame)
    return text


def removeExpressions(text):
    x = re.sub("\n" and "_" and "s", "", text)
    return x
