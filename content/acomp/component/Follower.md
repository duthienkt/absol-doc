# Follower

## Anchor

> Hover để xem chi tiết
<div id="follower-anchor-view"></div>

<script>
var css = new absol.DynamicCSS();

css.setRule('.fl-anchor-group', {
    opacity: 0.2,
    cursor: 'pointer'
})
    .setRule('.fl-anchor-group:hover', {
        opacity: 1
    })
    // .setRule('.fl-anchor-group:hover text', {
    //     opacity: 1,
    //     'font-size': '20px'
    // })

    .commit();

var view = $('#follower-anchor-view');
var $target = {
    x: 300 - 40,
    y: 200 - 20,
    width: 80,
    height: 40
}
var svg = _g({
    tag: 'svg',
    attr: {
        width: '600',
        height: '400'
    },
    child: [
        {
            tag: 'rect',
            attr: $target,
            style: {
                fill: 'none',
                stroke: 'black'
            }
        },
        {
            tag: 'text',
            attr: {
                x: 300 - 28,
                y: 200 + 5,
            },
            child: { text: 'TARGET' }
        },
        {
            child: absol.require('follower').ANCHOR_FACTORS.map((factor, i, array) => {
                var $content = {
                    width: 10,
                    height: 10
                };
                var $text = {
                    x: 20, y: 20,
                    anchor: 'start'
                }
                if ([0, 3, 4, 7].includes(i)) {
                    $content.width = 200;
                    $content.height = 100;

                }
                else if ([8, 10].includes(i)) {
                    $content.width = 230;
                    $content.height = 50;
                }
                else if ([1, 2, 5, 6].includes(i)) {
                    $content.width = 120;
                    $content.height = 130;
                }
                else if ([12, 13, 14, 15].includes(i)) {
                    $content.width = 100;
                    $content.height = 100;

                }
                else if ([9, 11].includes(i)) {
                    $content.width = 100;
                    $content.height = 160;
                }
                else {
                    $content.width = 100;
                }
                $content.x = $target.x + factor[0] * $target.width + factor[1] * $content.width;
                $content.y = $target.y + factor[2] * $target.height + factor[3] * $content.height;

                if ([1, 12, 0, 8, 7, 15, 6].includes(i)) {
                    $text.x = $content.x + $content.width + 3;
                }
                else if ([9, 11].includes(i)) {
                    $text.x = $content.x + $content.width / 2;
                    $text.anchor = 'middle'
                }
                else /* if ([2, 13, 3, 10, 4, 14, 5].includes(i))*/ {
                    $text.x = $content.x -3;
                    $text.anchor = 'end';
                }


                if ([4,14,5,11,6,15,7].includes(i)) {
                    $text.y = $content.y - 3;
                }
                else if ([10, 8].includes(i)) {
                    $text.y = $content.y + $content.height/2 + 7;
                    // $text.x = $content.x + $content.width / 2;
                    // $text.anchor = 'middle'
                }
                else  {
                    $text.y = $content.y + $content.height + 3 + 10;
                }

                var g = _g({
                    class: 'fl-anchor-group',
                    child: [
                        {
                            tag: 'rect',
                            attr: {
                                width: $content.width,
                                height: $content.height,
                                x: $content.x,
                                y: $content.y
                            },
                            style: {
                                fill: `hsla(${i / array.length * 360}, 50%, 50%, 0.2)`,
                                stroke: `hsla(${i / array.length * 360}, 50%, 50%, 1)`
                            }
                        },
                        {
                            tag: 'text',
                            attr: {
                                x: $text.x,
                                y: $text.y,
                                'text-anchor': $text.anchor
                            },
                            child: { text: i + '' }
                        }
                    ]
                });
                return g;
            })

        }

    ]
});
view.addChild(svg);

</script>