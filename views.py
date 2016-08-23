from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.views.generic import View

class IndexView(View):
    def get(self, request):
        #database logic
        return render(request, 'elrefugio_app/index.html')

class QuienesView(View):
    def get(self, request):
        return render(request, 'elrefugio_app/quienes-somos.html')

class AdoptaView(View):
    def get(self, request):
        return render(request, 'elrefugio_app/adopta-un-abuelo.html')

class AyudarView(View):
    def get(self, request):
        return render(request, 'elrefugio_app/como-ayudar.html')

class BenefactoresView(View):
    def get(self, request):
        return render(request, 'elrefugio_app/benefactores.html')



