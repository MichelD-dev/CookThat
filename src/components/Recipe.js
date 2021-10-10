import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Loader,
  Rating,
  Segment,
} from 'semantic-ui-react'

import { db } from '../firebase/firebase'

const Recipe = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const { id } = useParams()
  const history = useHistory()

  useEffect(() => {
    const getRecette = async () => {
      const collectionRef = collection(db, 'recipes')
      try {
        const querySnaphot = await getDocs(collectionRef)

        const recipes = querySnaphot.docs.map(doc => ({
          // Tableau de tous les objets 'recette'
          id: doc.id,
          ...doc.data(),
        }))
        setData(recipes)
      } catch (e) {
        setError(e.message)
      }
    }

    getRecette()
  }, [])

  if (!data[id]) {
    return <Loader indeterminate active size='big' content='Chargement...' />
  }

  return (
    <>
      <Image
        fluid
        src={data[id].photo}
        alt='image'
        style={{
          height: '250px',
          objectFit: 'cover',
        }}
      />
      <Button.Group
        style={{
          position: 'absolute',
          top: '15px',
          left: '-4px',
          borderRadius: '0 7px 7px 0',
        }}
      >
        <Button
          onClick={() => history.goBack()}
          size='large'
          attached='left'
          style={{ backgroundColor: 'rgba(50, 50, 50, 0.6)' }}
        >
          <Icon name='arrow left' inverted color='grey' />
        </Button>
        <Button
          size='large'
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
          }}
        >
          {/* <h3>{name}</h3> */}
          <Header as='h3' style={{ color: '#666' }}>
            {' '}
            Poulet à la moutarde
          </Header>
        </Button>
      </Button.Group>
      <Container
        style={{
          color: '#444',
        }}
      >
        {/*--------------------------------------------- */}

        <Item
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '20px',
          }}
        >
          <Rating icon='star' defaultRating={3} maxRating={5} disabled />
          32 votes
        </Item>

        {/*--------------------------------------------- */}

        <Item
          style={{
            paddingTop: '20px',
          }}
        >{`${
          +data[id].prepTime + // TODO Vérifier ce qu'il se passe si undefined (sur tous les champs)
          +data[id].restTime +
          +data[id].cookingTime
        } min - ${data[id].difficulty}`}</Item>

        {/*--------------------------------------------- */}

        <Item
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            // paddingTop: '20px',
          }}
        >
          {`${
            data[id].people !== undefined ? data[id].people + 'personnes' : ''
          }`}
        </Item>

        {/*--------------------------------------------- */}

        <h2>Ingrédients</h2>
        <ul>
          {data[id].ingredient.map((ingredient, id) => (
            <li key={`ingredient - ${id}`}>{ingredient.name}</li>
          ))}
        </ul>

        {/*--------------------------------------------- */}

        <h2>Préparation</h2>
        <Segment textAlign='center'>
          <p>
            Temps total:{' '}
            {Number(data[id].prepTime) +
              Number(data[id].restTime) +
              Number(data[id].cookingTime)}{' '}
            mns
          </p>

          <Item
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              // paddingTop: '20px',
            }}
          >
            <Item>
              <Item.Header>Préparation</Item.Header>
              <Item.Content> {`${data[id].prepTime} min` || '-'}</Item.Content>
            </Item>
            <Item>
              <Item.Header>Repos</Item.Header>
              <Item.Content> {`${data[id].restTime} min` || '-'}</Item.Content>
            </Item>
            <Item>
              <Item.Header>Cuisson</Item.Header>
              <Item.Content>
                {' '}
                {`${data[id].cookingTime} min` || '-'}
              </Item.Content>
            </Item>
          </Item>
        </Segment>

        {/*--------------------------------------------- */}

        <ul style={{ padding: '0 0 100px 0' }}>
          {data[0].etape.map(
            (
              etape,
              i // FIXME id?
            ) => (
              <Container key={i}>
                <Item.Group
                  inline
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    paddingTop: '20px',
                  }}
                >
                  <Label circular color='olive' size='big'>
                    {i + 1}{' '}
                    {/*FIXME pas bon de prendre l'index, je ne sais pas dans quel ordre sont récupérées les étapes dans la BDD */}
                  </Label>

                  <Item style={{ paddingLeft: '20px' }}>
                    {etape.description}
                  </Item>
                </Item.Group>
              </Container>
            )
          )}
        </ul>
      </Container>
    </>
  )
}

export default Recipe
