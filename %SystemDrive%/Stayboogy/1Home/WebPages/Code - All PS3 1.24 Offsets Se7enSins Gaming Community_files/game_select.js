var NFIGDB = window.NFIGDB || {};

!function($, window, document, _undefined)
{
    "use strict";

    NFIGDB.GameSelect = XF.Element.newHandler({

        options: {
            platforms: true,
            showFaves: null
        },

        loading: false,

        init: function()
        {
            var showFaves = this.options.showFaves;

            this.$target.select2({
                ajax: {
                    url: XF.canonicalizeUrl('index.php?igdb/search.json'),
                    delay: 750,
                    data: function (params) {
                        return {
                            term: params.term,
                            faves: showFaves,
                            _xfToken: XF.config.csrf
                        };
                    },
                    processResults: function (data) {
                        return {
                            results: data.results
                        };
                    },
                    cache: true
                },
                placeholder: 'Search for a game',
                allowClear: true,
                //templateResult: formatGame
                minimumInputLength: (showFaves ? 0 : 1)
            });

            if (this.$target.data('platform-picker'))
            {
                this.$target.on('select2:select', XF.proxy(this, 'loadPlatforms'));
            }
            else if (this.$target.data('section-lookup'))
            {
                this.$target.on('select2:select', XF.proxy(this, 'loadSections'));
            }
        },

        formatGame: function (game)
        {
            if (!game.id)
            {
                return game.text;
            }

            var $img = $('<img />', {
                src: game.cover
            }).style({
                height: 'auto',
                width: '40px'
            });

            var $game = $('<span />').text(game.text);

            $img.prepend($img);

            return $game;
        },

        loadPlatforms: function (e)
        {
            if (this.loading)
            {
                return;
            }
            this.loading = true;

            var gameIds = this.$target.val();
            if (!gameIds.length)
            {
                return;
            }

            var self = this,
                ajaxData = {
                    'rows': this.$target.data('rows'),
                    'admin': this.$target.data('admin'),
                    'no_groups': this.$target.data('no-groups'),
                    'platform_ids': []
                }

            if (Array.isArray(gameIds))
            {
                ajaxData.game_ids = gameIds
            }
            else
            {
                ajaxData.game_id = gameIds
            }

            XF.findRelativeIf('< :up(3) | input.js-ngIgdbPlatform:checked', this.$target).each(function ()
            {
                ajaxData.platform_ids.push($(this).val());
            });

            XF.ajax('get', XF.canonicalizeUrl('index.php?igdb/platforms/search'), ajaxData, function (data) {
                XF.setupHtmlInsert(data.html, function($html, container, onComplete)
                {
                    $('.formHiderTarget').replaceWith($html);
                });
            }).always(function ()
            {
                self.loading = false;
            });
        },

        loadSections: function (e)
        {
            if (this.loading)
            {
                return;
            }

            var gameId = this.$target.val();
            if (!gameId.length)
            {
                return;
            }

            var self = this, ajaxData = {}
            ajaxData.game_id = gameId

            XF.ajax('get', XF.canonicalizeUrl('index.php?igdb/game/sections'), ajaxData, function (data) {
                XF.setupHtmlInsert(data.html, function($html, container, onComplete)
                {
                    $('.gameSectionTarget').replaceWith($html).slideDown();
                });
            }).always(function ()
            {
                self.loading = false;
            });
        }
    });

    XF.Element.register('game-select', 'NFIGDB.GameSelect');
}
(jQuery, window, document);