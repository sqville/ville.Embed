/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NotePin",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 9.02v5.16A3 3 0 0 0 6 17h4.55a2 2 0 0 0 1.24-.59l4.62-4.62.12-.13a2 2 0 0 0 .47-1.28V5.82A3 3 0 0 0 14 3H9.46c.26.3.42.64.5 1h4.19A2 2 0 0 1 16 6v4h-3.18A3 3 0 0 0 10 13v3H5.85A2 2 0 0 1 4 14V9.81a1.82 1.82 0 0 1-.61-.4L3 9ZM13 11h2.78a1 1 0 0 1-.07.09l-4.62 4.62-.09.07V12.85A2 2 0 0 1 13 11ZM8.54 3.39 6.6 1.46a1.5 1.5 0 0 0-2.4.4L3.4 3.51a1 1 0 0 1-.57.5l-1.1.39a1 1 0 0 0-.39 1.65L2.3 7 1 8.3V9h.7L3 7.7l.95.95a1 1 0 0 0 1.65-.38l.38-1.1a1 1 0 0 1 .5-.57l1.65-.8a1.5 1.5 0 0 0 .4-2.41Z",
    FILLED : "M3 9.02v5.16A3 3 0 0 0 6 17h4v-4.18a3 3 0 0 1 2.82-2.81L13 10h4V5.82A3 3 0 0 0 14 3H9.46c.95 1.12.6 2.85-.74 3.51l-1.89.92-.44 1.28a1.82 1.82 0 0 1-3 .7L3 9Zm13.54 2.63a2 2 0 0 0 .36-.65h-4.06a2 2 0 0 0-1.83 1.85L11 13v3.9a2 2 0 0 0 .8-.49l4.61-4.62.13-.14Zm-8-8.26L6.6 1.46a1.5 1.5 0 0 0-2.4.4L3.4 3.51a1 1 0 0 1-.57.5l-1.1.39a1 1 0 0 0-.39 1.65L2.3 7 1 8.3V9h.7L3 7.7l.95.95a1 1 0 0 0 1.65-.38l.38-1.1a1 1 0 0 1 .5-.57l1.65-.8a1.5 1.5 0 0 0 .4-2.41Z"
  },

  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param size {Integer} The size of the icon in px. Sets width and height to this value.
   * @param color {String?"currentColor"} TextColor of the svg icon. Default is set to currentColor.
   * @param iconstyle {String?"regular"} Default is regular. Other allowed value is filled.
   * @param title {String} If included, adds a title tag to the svg root tag. 
   */
  construct (size, color, iconstyle, title)
  {
   super();

   if (size != null) {
    this.setWidth(size);
    this.setHeight(size);
   }

   if (color != null)
    this.setTextColor(color);

   if (iconstyle != null)
    this.setIconStyle(iconstyle);

   if (title != null)
    this.setTitle(title);
   
   //prep regular
   this._htmlregular = this._svgit(this._pathit(this.constructor.REGULAR));
   //prep filled
   this._htmlfilled = this._svgit(this._pathit(this.constructor.FILLED));
   
   if (this.getIconStyle() == "filled")
     this.setHtml(this._htmlfilled);
   else 
     this.setHtml(this._htmlregular);
 }
});