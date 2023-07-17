
from django.urls import path
from . import views

urlpatterns = [
    path('save/',views.shopitems.as_view() ),
    path('read/',views.shopitems.as_view() ),
    path('put/',views.shopitems.as_view() ),
    path('delete/',views.shopitems.as_view() ),
    # path('read',views.shopitems.as_view() )
]

