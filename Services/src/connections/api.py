import requests as req
from datetime import datetime
import json as JSON

def registerPlate(plate):
    try:
        newHeaders = {'Content-type': 'application/json',
                      'Accept': 'application/json'}
        data = {"plate": plate, "time": 'datetime.now()'}
        data_json = JSON.dumps(data)
        path="/TCC"
        response = req.post("http://127.0.0.1:3333/TCC",
                            data=data_json,
                            headers=newHeaders)
        print(response.text)
        return response
    except:
        print("ERROR_FROM_REQUEST")
        return "Error"