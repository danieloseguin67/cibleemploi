# Team portrait sources

Downloaded on 2026-09-30 from [the original team page](https://cibleretour.com/fr/a-propos/lequipe/).
The page displays these JPEG files through inline CSS `background: url(...)` on
`div.tmm_photo` elements, rather than HTML `img` elements. The downloaded files
retain the original image bytes and dimensions; only the filenames were changed.

| Team member | Local image | Original image | Dimensions |
| --- | --- | --- | --- |
| Karim Bouaoui | [karim-bouaoui.jpg](../client/src/assets/images/team/karim-bouaoui.jpg) | [Source](https://cibleretour.com/wp-content/uploads/2018/05/Photo-Karim-2.jpg) | 1798 × 1434 |
| Raquel Ramos Salado | [raquel-ramos-salado.jpg](../client/src/assets/images/team/raquel-ramos-salado.jpg) | [Source](https://cibleretour.com/wp-content/uploads/2018/05/Raquel-Ramos-Salado.jpg) | 474 × 640 |
| Sibi Lawson | [sibi-lawson.jpg](../client/src/assets/images/team/sibi-lawson.jpg) | [Source](https://cibleretour.com/wp-content/uploads/2018/05/Photo-de-Sibi-Lawson.jpg) | 2048 × 2048 |
| Inès Laurent | [ines-laurent.jpg](../client/src/assets/images/team/ines-laurent.jpg) | [Source](https://cibleretour.com/wp-content/uploads/2018/05/Ines.jpg) | 1024 × 1188 |
| Mariane La France | [mariane-la-france.jpg](../client/src/assets/images/team/mariane-la-france.jpg) | [Source](https://cibleretour.com/wp-content/uploads/2018/05/Photo-Mariane-La-France.jpg) | 360 × 362 |
| Christian Dame | [christian-dame.jpg](../client/src/assets/images/team/christian-dame.jpg) | [Source](https://cibleretour.com/wp-content/uploads/2018/05/Photo-Christian.jpg) | 323 × 316 |

In Angular templates, reference these files with a relative asset path, for example:

```html
<img src="assets/images/team/karim-bouaoui.jpg" alt="Karim Bouaoui" />
```

Both French and English team content files reference these portraits. The shared
team component displays them above each member's name.
