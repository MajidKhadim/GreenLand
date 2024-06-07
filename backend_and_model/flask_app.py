from flask import Flask,request,jsonify
from flask_cors import CORS
import joblib
import numpy as np

model = joblib.load('classifier.pkl')
class_label_to_crop = joblib.load('label_to_crop.json')

app = Flask(__name__)
CORS(app)

@app.route('/classify', methods =['POST'])
@app.route('/classify', methods=['POST'])
def classify_message():
    try:
        data = request.json
        print(data)
        features = np.array([[float(data['Nitrogen']), float(data['Phosphorus']), float(data['Potassium']),
                              float(data['Temperature']), float(data['Humidity']), float(data['pH_Value']),
                              float(data['Rainfall'])]])
        classification = model.predict(features)[0]
        predicted_crop = class_label_to_crop.get(classification, 'Unknown')  # Get the crop name from the mapping
        return jsonify({'classification': int(classification), 'predicted_crop': predicted_crop})
    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
