/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ScanThumbUpOff",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M2.41 3.12C2.15 3.52 2 4 2 4.5v2a.5.5 0 0 0 1 0v-2c0-.23.05-.45.15-.65l4.57 4.58a1.42 1.42 0 0 1-.06.05l-1.24.7a1.76 1.76 0 0 0-.8 2.18l.35.9c.2.51.65.9 1.18 1.06l3.61 1.08c.85.26 1.75-.01 2.3-.63l3.09 3.08c-.2.1-.42.15-.65.15h-2a.5.5 0 0 0 0 1h2c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l.26.27Zm9.94 9.94c-.29.36-.8.54-1.3.39l-3.61-1.09a.82.82 0 0 1-.54-.48L6.55 11a.76.76 0 0 1 .36-.94l1.24-.7a.5.5 0 0 0 .04-.02h.01v-.01l.02-.01a1.79 1.79 0 0 0 .21-.17l3.92 3.92Zm-3.5-6.32.75.74.35-.68c.17-.32.32-.61.5-1.02.03-.08.1-.17.19-.23a.3.3 0 0 1 .26-.04c.26.07.4.2.48.38.09.18.12.43.13.73 0 .28-.06.64-.15.99-.03.16-.08.31-.12.45a.5.5 0 0 0 .48.65h.93c.6 0 .96.53.82 1l-.39 1.25.8.8.54-1.76c.36-1.17-.56-2.3-1.77-2.3h-.28c.08-.34.14-.74.14-1.1-.01-.34-.04-.76-.23-1.15a1.68 1.68 0 0 0-1.13-.9c-.83-.23-1.43.38-1.63.85-.15.36-.28.61-.45.94l-.21.4ZM17 14.88l.98.97.02-.35v-2a.5.5 0 0 0-1 0v1.38ZM4.15 2.02l.97.98H6.5a.5.5 0 0 0 0-1h-2c-.12 0-.24 0-.35.02ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2Z",
    FILLED : "M2.41 3.12C2.15 3.52 2 4 2 4.5v2a.5.5 0 0 0 1 0v-2c0-.23.05-.45.15-.65l4.57 4.58a1.42 1.42 0 0 1-.06.05l-1.24.7a1.76 1.76 0 0 0-.8 2.18l.35.9c.2.51.65.9 1.18 1.06l3.61 1.08c.85.26 1.75-.01 2.3-.63l3.09 3.08c-.2.1-.42.15-.65.15h-2a.5.5 0 0 0 0 1h2c.5 0 .98-.15 1.38-.41l.27.26a.5.5 0 0 0 .7-.7l-15-15a.5.5 0 1 0-.7.7l.26.27Zm6.45 3.62 5.02 5.02.54-1.76c.36-1.17-.56-2.3-1.77-2.3h-.28c.08-.34.14-.74.14-1.1-.01-.34-.04-.76-.23-1.15a1.68 1.68 0 0 0-1.13-.9c-.83-.23-1.43.38-1.63.85-.15.36-.28.61-.45.94a37 37 0 0 0-.21.4ZM17 14.88l.98.97.02-.35v-2a.5.5 0 0 0-1 0v1.38ZM4.15 2.02l.97.98H6.5a.5.5 0 0 0 0-1h-2c-.12 0-.24 0-.35.02ZM4.5 17A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 4.5 18h2a.5.5 0 0 0 0-1h-2ZM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 0 1 0-1h2A2.5 2.5 0 0 1 18 4.5v2a.5.5 0 0 1-1 0v-2Z"
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