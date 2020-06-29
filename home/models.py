from django.db import models

from wagtail.core.models import Page
from puzzle.models import PuzzlePostPage, PuzzleIndexPage


class HomePage(Page):
    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request)
        puzzles = PuzzlePostPage.objects.live().order_by('-first_published_at')[:2]
        context['today_puzzle'] = puzzles[0]
        context['yesterday_puzzle'] = puzzles[1]
        return context
