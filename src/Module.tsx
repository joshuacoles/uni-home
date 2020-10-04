import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import { Collapse } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    margin: "0.5rem",
    // width: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },

  expand: {
    transform: "rotate(0deg)",
    // marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },

  expandOpen: {
    transform: "rotate(180deg)"
  },

  zoomList: {
    listStyleType: 'none',
    paddingLeft: '1rem',
    '& li:before': {
      content: '"•  "',
      color: theme.palette.primary.light
    },

    '& li': {
      color: 'inherit'

    }
  }
}));

interface ModuleProps {
  title: string
  code: string

  moodleLink?: string,
  panoptoLink?: string,
  zoomLink?: string
}

export function Module({ title, code, moodleLink, panoptoLink, zoomLink }: ModuleProps) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {code}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link href={moodleLink}>
          <Button size="small" color="primary">
            Moodle
          </Button>
        </Link>

        <Link href={panoptoLink}>
          <Button size="small" color="primary">
            Panopto
          </Button>
        </Link>

        {/*<Button*/}
        {/*  className={clsx(classes.expand)}*/}
        {/*  onClick={handleExpandClick}*/}
        {/*  aria-expanded={expanded}*/}
        {/*  size="small" color="primary"*/}
        {/*>*/}
        {/*  Zoom*/}
        {/*  {" "}*/}
        {/*  <ExpandMoreIcon*/}
        {/*    className={clsx(classes.expand, {*/}
        {/*      [classes.expandOpen]: expanded*/}
        {/*    })}*/}
        {/*  />*/}
        {/*</Button>*/}
      </CardActions>

      {/*<Collapse in={expanded} timeout="auto" unmountOnExit>*/}
      {/*  <CardContent style={{ paddingTop: 0, paddingBottom: '0' }}>*/}
      {/*    <Typography paragraph>*/}
      {/*      Zoom Links:*/}

      {/*      <ul className={classes.zoomList}>*/}
      {/*        <li><Link href="https://moodle.bath.ac.uk/mod/zoom/view.php?id=876354">Week 1</Link></li>*/}
      {/*        <li><Link href="https://moodle.bath.ac.uk/mod/zoom/view.php?id=876371">Week 2</Link></li>*/}
      {/*        <li><Link href="https://moodle.bath.ac.uk/mod/zoom/view.php?id=876395">Week 3</Link></li>*/}
      {/*        <li><Link href="https://moodle.bath.ac.uk/mod/zoom/view.php?id=876401">Week 4</Link></li>*/}
      {/*        <li><Link href="https://moodle.bath.ac.uk/mod/zoom/view.php?id=876403">Week 5</Link></li>*/}

      {/*      </ul>*/}

      {/*    </Typography>*/}
      {/*  </CardContent>*/}
      {/*</Collapse>*/}
    </Card>
  );
}
