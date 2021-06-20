const express = require('express');

const app = express();

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('/', (req, res) => {
	console.log('Request received');
  res.send('Hello World!')
});

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
