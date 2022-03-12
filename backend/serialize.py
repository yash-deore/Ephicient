def serializerRequest(object):
	return{

        'req_id':object.req_id,
		'dob':object.dob,
		'gender':object.gender,
		'allergy': object.allergy,
		'phone_number': object.phone_number,
		'pregnant':object.pregnant,
        'description':object.description,
        'symptom':object.symptom,
        'location':object.location,
	}