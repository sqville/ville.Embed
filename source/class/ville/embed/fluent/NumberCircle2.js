/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.NumberCircle2",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M3 10a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16ZM8.4 7.3a.5.5 0 0 1-.8-.6 1.75 1.75 0 0 1 .18-.2c.1-.11.26-.26.46-.4.4-.3 1-.6 1.76-.6A2.5 2.5 0 0 1 12.5 8c0 .79-.33 1.35-.78 1.78-.35.34-.8.62-1.22.87l-.23.15c-.5.3-.93.61-1.25 1.02-.23.3-.41.68-.49 1.18H12a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5c0-.98.28-1.72.73-2.29.43-.56 1-.94 1.5-1.26l.27-.17c.42-.25.76-.46 1.03-.72.3-.28.47-.6.47-1.06 0-.83-.67-1.5-1.5-1.5a2 2 0 0 0-1.17.4 2.47 2.47 0 0 0-.43.4Z",
    FILLED : "M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.4-2.7a.96.96 0 0 1 .1-.11c.07-.08.18-.18.33-.29A2 2 0 0 1 10 6.5c.83 0 1.5.67 1.5 1.5 0 .46-.17.78-.47 1.06-.27.26-.61.47-1.03.72l-.27.17c-.5.32-1.07.7-1.5 1.26a3.6 3.6 0 0 0-.73 2.29c0 .28.22.5.5.5h4a.5.5 0 0 0 0-1H8.53c.08-.5.26-.88.49-1.18.32-.4.75-.71 1.25-1.02l.23-.15c.41-.25.87-.53 1.22-.87.45-.43.78-1 .78-1.78A2.5 2.5 0 0 0 10 5.5c-.76 0-1.36.3-1.76.6a3.47 3.47 0 0 0-.64.6.5.5 0 0 0 .8.6Z"
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