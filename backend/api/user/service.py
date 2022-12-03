from api.user.models.user import User
from config.db import db
from flask import Blueprint, jsonify, request
from flask_api import status


def create_user(
    username: str, firstname: str, lastname: str, email:str, address:str, password: str, id: str
) -> User:
    user = User(
        Username=username,
        Firstname=firstname,
        Lastname=lastname,
        Password=password,
        Email=email,
        Address=address,
        UserID=id,
    )
    db.session.add(user)
    db.session.commit()
    return user

def read_one_user(
    **kwargs
) -> User:
    return User.query.filter_by(
        **kwargs
    ).first()
def read_all_user(
    **kwargs
) -> User:
    user = User.query.filter(
        **kwargs
    ).all()

    print(user)

    res = list(map(
        lambda u: u.serialize(),
        user
    ))

    print("res", res)
    db.session.commit()

    return( jsonify(
        success=True,
        data=res
    ), status.HTTP_200_OK)


