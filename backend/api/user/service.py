from api.user.models.user import User
from config.db import db
from flask import Blueprint, jsonify, request
from flask_api import status


def create_user(
    username: str, firstname: str, lastname: str, email:str, address:str, password: str, UserID: str
) -> User:
    user = User(
        username=username,
        firstname=firstname,
        lastname=lastname,
        password=password,
        email=email,
        address=address,
        UserID=UserID,
    )
    db.session.add(user)
    db.session.commit()
    return user

# def read_one_user(
#     **kwargs
# ) -> User:
#     return User.query.filter_by(
#         **kwargs
#     ).all()

def read_one_user(

    userID: str 
) -> User:
    user = User.query.filter_by(userID = userID)
    res = list(map(
        lambda u: u.serialize(),
        user
    ))

    db.session.commit()
def read_one_user(userID):
    res =  User.query.filter_by(userID=userID).first()
    return res

    return res

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

def update_users(

   Username: str, FirstName: str, LastName: str, Email: str, Address: str, UserID: str
) -> User:
    user = User.query.filter_by(UserID = User.UserID)

    user.update({
        "Username":Username ,
        "FirstName":FirstName,
        "LastName":LastName,
        "Email":Email,
        "Address":Address,
        })

    db.session.commit()

    return user

def update_user_password(

    userID: str , username: str, password: str
) -> User:
    user = User.query.filter_by(userID = userID)

    user.update({"password":password})

    res = list(map(
        lambda u: u.serialize(),
        user
    ))

    db.session.commit()

    return res

