from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = list(Product.objects.values())
    return JsonResponse(products, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.filter(pk=id).values().first()
        return JsonResponse(product)
    except:
        return JsonResponse({'error': 'Not found'}, status=404)

def category_list(request):
    categories = list(Category.objects.values())
    return JsonResponse(categories, safe=False)

def category_detail(request, id):
    try:
        category = Category.objects.filter(pk=id).values().first()
        return JsonResponse(category)
    except:
        return JsonResponse({'error': 'Not found'}, status=404)

def category_products(request, id):
    products = list(Product.objects.filter(category_id=id).values())
    return JsonResponse(products, safe=False)