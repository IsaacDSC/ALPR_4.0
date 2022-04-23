import cv2
import imutils
from imutils.video import VideoStream

# replace this with the url generated by the Wyze app
rtsp_url = "rtsp://10.0.0.131:554/1s"

vs = VideoStream(rtsp_url).start()

while True:
    frame = vs.read()

    if frame is None:
        continue

    frame = imutils.resize(frame, width=1200)

    cv2.imshow('WyzeCam', frame)

    key = cv2.waitKey(1) & 0xFF

    if key == ord('q'):
        break

cv2.destroyAllWindows()
vs.stop()