import uuid
import bcrypt

from api.user.models.user import User
from api.user import service as user_service
from flask_api import status
from flask_jwt_extended import create_access_token

def login_user(
    username,
    password
) -> str:
    user: User = user_service.read_one_user(
        username=username
    )

    if user is None:
        raise Exception("Cannot find user")
    
    if not bcrypt.checkpw(password.encode('utf-8'), user.password_hash):
        raise Exception("Cannot verify user credentials")

    access_token = create_access_token(identity=user.id)

    return access_token


def register_user(
    username,
    password,
    email,
) -> User:
    id = uuid.uuid4().__str__()
    password_salt = bcrypt.gensalt()
    password_hash = bcrypt.hashpw(password.encode('utf-8'), password_salt)
    
    user = user_service.create_user(
        username=username,
        password_salt=str(password_salt),
        password_hash=str(password_hash),
        email=email,
        id=id
    )

    return user
