from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='elrefugioindex'),
    url(r'^quienes-somos$', views.QuienesView.as_view(), name='quienes-somos'),
    url(r'^adopta-un-abuelo$', views.AdoptaView.as_view(), name="adopta-un-abuelo"),
    url(r'^como-ayudar$', views.AyudarView.as_view(), name="como-ayudar"),
    url(r'^benefactores$', views.BenefactoresView.as_view(), name="benefactores"),

]
