from .models import Items
from django.core import serializers
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ItemsSerializer


class shopitems(APIView):

    def post(self,request):

        # ------------- without serializer ---------------

        # data=Items(product_img=request.data.get('product_img'),
        #            product_name=request.data.get('product_name'),
        #            product_price=request.data.get('product_price'),
        #            product_description=request.data.get('product_description'))

        # ------------- with serializer ---------------

        items= ItemsSerializer(data=request.data)

        if items.is_valid():
            items.save()
            return JsonResponse(items.data)

        return JsonResponse(items.errors)


    def get(self,request):

        prod=Items.objects.all().values()
        # serialized_products = serializers.serialize('json', prod)
        return Response(prod)

    def delete(self, requset):

        Items.objects.all().delete()
        return Response('Deleted')


