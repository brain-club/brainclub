import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import { Close, LocalOffer } from '@material-ui/icons'
import { POST_CARD_SIZE } from 'const'
import { PostContext } from 'providers/PostProviders'
import React, { ReactElement, useContext } from 'react'

interface StyleProps {
  backgroundColor?: string
}

const useStyles = makeStyles({
  root: {
    width: POST_CARD_SIZE.width,
    height: POST_CARD_SIZE.height,
    cursor: 'move',
    boxShadow: '4px 4px 10px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: (props: StyleProps) => props.backgroundColor ?? '#d8d8d8',
    borderRadius: 10,
  },
  button: {
    minWidth: 0,
    padding: 0,
    lineHeight: 1,
  },
  inputText: {
    fontSize: 24,
    lineHeight: 0.9,
  },
})

const censoringWords = [
  'anal',
  'anus',
  'arse',
  'ass',
  'ballsack',
  'balls',
  'bastard',
  'bitch',
  'biatch',
  'bloody',
  'blowjob',
  'blow job',
  'bollock',
  'bollok',
  'boner',
  'boob',
  'bugger',
  'bum',
  'butt',
  'buttplug',
  'clitoris',
  'cock',
  'coon',
  'crap',
  'cunt',
  'damn',
  'dick',
  'dildo',
  'dyke',
  'fag',
  'feck',
  'fellate',
  'fellatio',
  'felching',
  'fuck',
  'f u c k',
  'fudgepacker',
  'fudge packer',
  'flange',
  'Goddamn',
  'God damn',
  'hell',
  'homo',
  'jerk',
  'jizz',
  'knobend',
  'knob end',
  'labia',
  'lmao',
  'lmfao',
  'muff',
  'nigger',
  'nigga',
  'omg',
  'penis',
  'piss',
  'poop',
  'prick',
  'pube',
  'pussy',
  'queer',
  'scrotum',
  'sex',
  'shit',
  's hit',
  'sh1t',
  'slut',
  'smegma',
  'spunk',
  'tit',
  'tosser',
  'turd',
  'twat',
  'vagina',
  'wank',
  'whore',
  'wtf',
]

export interface BoxProps {
  id: string
  title: string
  color?: string
}

export function PostCard({ title, id, color }: BoxProps): ReactElement {
  const classes = useStyles({
    backgroundColor: color,
  })
  const { postMap, updatePost, deletePost } = useContext(PostContext)
  const hasError = !postMap[id].title
    .split(' ')
    .every((word) => !censoringWords.includes(word))
  return (
    <Box
      className={classes.root}
      padding={2}
      display='flex'
      justifyContent='space-between'
      flexDirection='column'
    >
      <Box display='flex' flexDirection='row-reverse' flexGrow={1}>
        <Button className={classes.button} onClick={() => deletePost(id)}>
          <Close htmlColor='#a8a5a5' />
        </Button>
      </Box>
      <TextField
        fullWidth
        multiline
        rows={5}
        defaultValue={title}
        InputProps={{
          disableUnderline: true,
          classes: {
            input: classes.inputText,
          },
        }}
        onChange={(e) => updatePost(id, e.target.value)}
        error={hasError}
        helperText={hasError ? 'Censoring AI cat bad texts' : ''}
      />
      <Box display='flex' flexDirection='row-reverse' flexGrow={1}>
        <Button className={classes.button} onClick={() => {}}>
          <LocalOffer />
        </Button>
      </Box>
    </Box>
  )
}
