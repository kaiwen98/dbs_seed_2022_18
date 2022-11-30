from api.user.models.user import User
from config.db import db


def create_user(
    username: str, password_salt: str, password_hash: str, email: str, id: str
) -> User:
    user = User(
        username=username,
        password_salt=password_salt,
        password_hash=password_hash,
        email=email,
        id=id,
    )
    db.session.add(user)
    db.session.commit()
    return user

def read_one_user(
    **kwargs
) -> User:
    return User.query.filter(
        **kwargs
    ).first()
