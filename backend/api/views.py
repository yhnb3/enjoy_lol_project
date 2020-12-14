from django.shortcuts import render
import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings


# Create your views here.
@api_view(['GET'])
def user_match(request, name):
    url = f'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/{name}'
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
        "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
        "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://developer.riotgames.com",
        "X-Riot-Token": settings.RIOT_API_KEY
    }
    user_result = requests.get(url, headers=headers)
    encryptedAccountId = user_result.json()['accountId']
    match_url = f'https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/{encryptedAccountId}'
    match_result = requests.get(match_url, headers=headers)
    return Response(match_result.json())