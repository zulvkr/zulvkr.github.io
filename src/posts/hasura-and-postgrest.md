---
layout: blog.html
title: Learning Hasura and PostgREST
description: Make an instant API with Hasura and PostgREST
date: 2021-06-17
tags:
  - post
  - stub
  - Hasura
  - PostgREST
  - stub
---

If you are thinking this is a tutorial, no. This is just my review after doing official tutorial of PostgREST and Hasura Cloud.

I've read a lot of great review when people taking about Hasura and PostgREST in Hacker News. 
Many people said they never write their backend by hand anymore at all. Months of coding become a few days. Sounds crazy right?

If you aren't familiar with them, they are a service that turn PostgreSQL database into full-fledged API by leveraging PostgreSQL ability. Both are open source, can be self-hosted and written in Haskell.

So I, a little programmer with a bit of SQL knowledge trying to get a bite of it. Both has initial tutorial to get onboard and can be done in 30 minutes.

## Hasura first impression

I'm touching no code so far with Hasura automate everything. You could try hasura cloud for free with bandwidth limit. You will be using postgres database in Heroku for testing or you could provide your own Postgres database to be connected.

After you make a hasura instance, hasura will detect the database content and make graphql api instantly. I haven't explored the authentication yet, maybe next week after I learned it.

The end.

Seriously, there is nothing much to do with hasura. I think it will be great of we have a testing database.

## PostgREST

With PostgREST, I have similar experience with Hasura, but without the GUI. But I think they taught better tutorial than Hasura, they put some thought on teaching proper SQL management like making postgres roles for different user authority, rather than just putting up a heroku database for testing.

You will have to write SQL command quite a lot, many are for managing roles. I wonder if using GUI for managing roles will be better experience for developer, like using dbeaver. The tutorial is quite easy to follow if you have some experience with `psql`.

They taught some authentication stuff to, which I did, but I'm lost at it. Maye I need a lesson about JWT first.

That's sum my experience with both. I should also mention postgraphile, which is similat with pos