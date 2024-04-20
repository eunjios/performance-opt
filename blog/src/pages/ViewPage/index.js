import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import './index.css';
import BasicTemplates from '../../templates/BasicTemplates';
import CodeBlock from '../../components/markdowns/CodeBlock';

function ViewPage(props) {
  const { id } = useParams();
  const [article, setArticle] = useState(false);
  const articleImage = article
    ? `${article.image}?q=80&fm=webp&width=1400`
    : '';

  // 게시글 가져오기
  const getArticle = useCallback((id) => {
    axios.get('http://localhost:3001/articles/' + id).then((success) => {
      setArticle(success.data);
    });
  }, []);

  useEffect(() => {
    getArticle(id);
  }, [getArticle, id]);

  return article ? (
    <BasicTemplates>
      <div className={'ViewPage'}>
        <h1 className={'ViewPage__title'}>{article.title}</h1>
        <img className={'ViewPage__image'} src={articleImage} alt="thumnail" />
        <div className={'ViewPage__content'}>
          <ReactMarkdown
            source={article.content}
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
    </BasicTemplates>
  ) : (
    <h1>loading...</h1>
  );
}

export default ViewPage;
