/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.EmojiSparkle",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0 0 .8l1.07.34a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.35-1.07a2.2 2.2 0 0 1 1.4-1.4l1.07-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.58 1.58 0 0 0-1-1l-.77-.25a.3.3 0 0 1 0-.57l.77-.25a1.58 1.58 0 0 0 .98-1l.25-.76a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1Zm-2.25 3.82a1.3 1.3 0 0 0 .98.2 8 8 0 1 1-6.58-9.9l-.2.07a1.43 1.43 0 0 0-.88.85H10a7 7 0 1 0 6.77 8.78ZM12.5 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-.61 5.01a.5.5 0 1 0-.78.63 5 5 0 0 0 7.78 0 .5.5 0 1 0-.78-.63 4 4 0 0 1-6.22 0Z",
    FILLED : "M15.23 1.35 14.88.28a.42.42 0 0 0-.8 0l-.35 1.07a2.2 2.2 0 0 1-1.38 1.4l-1.07.35a.42.42 0 0 0-.28.4.42.42 0 0 0 .28.4l.43.13.64.21a2.2 2.2 0 0 1 1.4 1.4l.35 1.08a.42.42 0 0 0 .8 0l.1-.32.23-.7V5.7l.02-.04a2.2 2.2 0 0 1 .7-1l-.01-.01c.2-.17.45-.3.7-.39l1.08-.35a.42.42 0 0 0 0-.8h-.02l-1.08-.35a2.2 2.2 0 0 1-1.4-1.4Zm3.79 6.61.76.25h.02a.3.3 0 0 1 0 .58l-.77.25a1.58 1.58 0 0 0-1 1l-.24.76a.3.3 0 0 1-.58 0l-.24-.77a1.54 1.54 0 0 0-.38-.62 1.58 1.58 0 0 0-.62-.38l-.77-.25a.3.3 0 0 1-.2-.28.3.3 0 0 1 .05-.18.3.3 0 0 1 .15-.1l.77-.26a1.6 1.6 0 0 0 .6-.38c.18-.17.3-.38.38-.61l.25-.77a.3.3 0 0 1 .57 0l.25.77a1.57 1.57 0 0 0 1 1Zm-1.27 4.02a8 8 0 1 1-6.58-9.9l-.2.07a1.43 1.43 0 0 0-.9 1.78 1.42 1.42 0 0 0 .88.9l1.1.37a1.2 1.2 0 0 1 .76.76l.34 1.07c.09.26.25.49.46.66l.03.02.04.03c.14.1.29.17.44.2a1.3 1.3 0 0 0 .75 1.79l.8.25a.57.57 0 0 1 .35.37l.25.76a1.31 1.31 0 0 0 1.48.87ZM12.5 7.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-.61 5.01a.5.5 0 1 0-.78.63 5 5 0 0 0 7.78 0 .5.5 0 1 0-.78-.63 4 4 0 0 1-6.22 0Z"
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