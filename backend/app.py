from flask import Flask, request , jsonify
from flask_cors import CORS, cross_origin


from model import db, Request 
from serialize import serializerRequest



app = Flask(__name__)
CORS(app, supports_credentials=True)
db.init_app(app)
with app.app_context():
    #db.drop_all()
    #StoreProducts.__table__.drop(db.engine)
    db.create_all()
    print("database active")




@app.route('/', methods=['GET'])
def testing():

      return jsonify({

            "drug_list":"hello"
            
        }
    )
@app.route('/submitting_the_form', methods=['POST'])
def submit_form():


#DOB,gender,allergies,phonenumber,pregnant,description,symptoms,location
    dob = request.json["dob"]
    gender = request.json["gender"]
    allergy = request.json["allergy"]
    medication = request.json["medication"]
    phone_number = request.json["phone_number"]
    pregnant = request.json["pregnant"]
    description = request.json["description"]
    symptom = request.json["symptom"]
    location = request.json["location"]

    new_request =Request(dob=dob,gender =gender,allergy=allergy,medication=medication,phone_number=phone_number,pregnant=pregnant,description=description,symptom=symptom,location=location )
    db.session.add(new_request)
    db.session.commit()
    print("testing print statement")
    print("DOb:" + new_request.dob,"req_id:" + str(new_request.req_id))
    return jsonify({

        "msg":"success"
        
    }
)


@app.route('/retrieval_of_queue_information', methods=['GET'])
def send_all_info():
    request = Request.query.all()
    return jsonify(

        [*map(serializerRequest,request)]
            
        
    )


@app.route('/fuflling_a_queue/<int:req_id>', methods=['PUT'])
def delete_one_request(req_id):
    old_req_id=str(Request.query.filter_by(req_id=req_id).first())
    Request.query.filter_by(req_id=req_id).delete()
    db.session.commit()
    return jsonify({
        "msg":"succuesffuly removed" +old_req_id
    })


if __name__ == "__main__":
    app.run(debug=True)