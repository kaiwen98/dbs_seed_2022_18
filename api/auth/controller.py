from flask import Blueprint

auth_api = Blueprint(
  'auth',
  __name__
)

@auth_api.route('/login', methods=['GET'])
def get_login():
  return 'login'

@auth_api.route('/login', methods=['POST'])
def post_login():
  return 'login POST'

