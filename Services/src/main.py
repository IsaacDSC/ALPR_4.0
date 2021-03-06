import cv2
from streaming.capture import(stream,capture,train)


def main():
    print(' [ * ] Initialize service ALPR')
    camera = stream()

    while(1):
        ret, frame = camera.read()
        cv2.imshow("TCC", frame)

        k = cv2.waitKey(30) & 0xff
        if k == ord("s"):
            capture(frame)
        if k == ord("t"):
            train(frame)
        if k == 27:
            break

    camera.release()
    cv2.destroyAllWindows()


if __name__ == '__main__':
    main()





