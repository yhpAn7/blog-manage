import Mock from 'mockjs'
const categories =['本地文件','博客文章','摄影图库','随行日记'];
const overviews = Mock.mock({
    'list|4': [{
        'id|+1': 1,
        'label|1': function () {
            return categories[this.id - 1]
        },
        'value|100-1000': Mock.Random.integer(1, 100)
    }]
})

export 
{overviews}