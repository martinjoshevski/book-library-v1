def price_under500(manga):
   if manga["Price"] > 500:
       return True
   else:
       return False

def price_above500(manga):
    if manga["Price"] < 500:
        return True
    else:
        return False