import cv2
from analytics.execute import (
    convertGray,
    convertMonochromatic,
    countFrames,
    defineBackGroundBlack,
    recortFrame,
    plateMonochromatic,
    processText,
    removeExpressions,
)

def analytics(img):
    gray = convertGray(img)
    monochromatic = convertMonochromatic(gray)
    contours = countFrames(monochromatic)

    location = None
    for contour in contours:
        approx = cv2.approxPolyDP(contour, 10, True)
        if len(approx) == 4:
            location = approx
            break

    blackbackground, mask = defineBackGroundBlack(
        monochromatic, img, location).values()
    plate_img = recortFrame(gray, mask)
    monoPlate = plateMonochromatic(plate_img)
    readText = processText(monoPlate)
    text = removeExpressions(readText)
    print(text)

    return text
