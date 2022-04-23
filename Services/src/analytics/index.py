from analytics.execute import (
    convertGray,
    convertMonochromatic,
    countFrames,
    defineBackGroundBlack,
    recortFrame,
    plateMonochromatic,
    processText,
    removeExpressions
)


def analytics(frame):
    gray = convertGray(frame)
    monochromatic = convertMonochromatic(gray)
    location = countFrames(monochromatic)
    blackbackground, mask = defineBackGroundBlack(monochromatic, frame, location).values()
    plate_img = recortFrame(blackbackground,mask)
    monoPlate = plateMonochromatic(plate_img)
    readText = processText(monoPlate)
    text = removeExpressions(readText)
    return text
