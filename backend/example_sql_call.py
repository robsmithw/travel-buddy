import sqlite3
from models.attendance import attendance
from models.event import event
from models.location import location
from models.user import user

def readSqliteTable():
    try:
        sqliteConnection = sqlite3.connect('backend/travel.sqlite3')
        cursor = sqliteConnection.cursor()

        sqlite_select_query = """SELECT * FROM Attendance"""
        cursor.execute(sqlite_select_query)
        records = cursor.fetchall()

        model = attendance()

        for row in records:
            model.attendance_id = row[0]
            model.customer_id = row[1]
            model.event_id = row[2]

            print("attendance_id: ", model.attendance_id)
            print("customer_id: ", model.customer_id)
            print("event_id: ", model.event_id)
            print("\n")

        sqlite_select_query = """SELECT * FROM Event"""
        cursor.execute(sqlite_select_query)
        records = cursor.fetchall()

        model = event()

        for row in records:
            model.event_id = row[0]
            model.location_id = row[1]
            model.name = row[2]
            model.category = row[3]
            model.event_address = row[4]
            model.date = row[5]
            model.start_time = row[6]
            model.end_time = row[7]

            print("event_id: ", model.event_id)
            print("location_id: ", model.location_id)
            print("name: ", model.name)
            print("category: ", model.category)
            print("event_address: ", model.event_address)
            print("date: ", model.date)
            print("start_time: ", model.start_time)
            print("end_time: ", model.end_time)
            print("\n")

        sqlite_select_query = """SELECT * FROM Location"""
        cursor.execute(sqlite_select_query)
        records = cursor.fetchall()

        model = location()

        for row in records:
            model.location_id = row[0]
            model.address = row[1]
            model.city = row[2]
            model.state = row[3]
            model.country = row[4]
            model.zip_code = row[5]
            model.latitude = row[6]
            model.longitude = row[7]

            print("location_id: ", model.location_id)
            print("address: ", model.address)
            print("city: ", model.city)
            print("state: ", model.state)
            print("country: ", model.country)
            print("zip_code: ", model.zip_code)
            print("latitude: ", model.latitude)
            print("longitude: ", model.longitude)
            print("\n")

        sqlite_select_query = """SELECT * FROM User"""
        cursor.execute(sqlite_select_query)
        records = cursor.fetchall()

        model = user()

        for row in records:
            model.user_id = row[0]
            model.first_name = row[1]
            model.last_name = row[2]
            model.username = row[3]
            model.password = row[4]            

            print("user_id: ", model.user_id)
            print("first_name: ", model.first_name)
            print("last_name: ", model.last_name)
            print("username: ", model.username)
            print("password: ", model.password)            
            print("\n")

        cursor.close()                        

    except sqlite3.Error as error:
        print("Failed to read data from sqlite table", error)
    finally:
        if sqliteConnection:
            sqliteConnection.close()

readSqliteTable()