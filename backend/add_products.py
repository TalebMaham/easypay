# scripts/add_products.py

import os
import django

# Configure Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backend.settings")
django.setup()

from products.models import Product

def add_product(name, price, inventory):
    product = Product(name=name, price=price, inventory=inventory)
    product.save()

if __name__ == "__main__":
 
    add_product("T-shirt Blanc", 19.99, 100)
    add_product("Jean Slim Noir", 49.99, 75)
    add_product("Chaussures de Sport", 89.99, 50)
   
