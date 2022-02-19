def price_under500(book):
   if book["Price"] > 500:
       return True
   else:
       return False

def price_above500(book):
    if book["Price"] < 500:
        return True
    else:
        return False