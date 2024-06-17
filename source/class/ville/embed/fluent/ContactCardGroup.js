/* ************************************************************************
   License:
     MIT: https://opensource.org/licenses/MIT
   Authors:
     * Chris Eskew (SQville) sqville@gmail.com
************************************************************************ */
qx.Class.define("ville.embed.fluent.ContactCardGroup",
{
  extend : ville.embed.fluent.Abstract,

  statics :
  {
    REGULAR : "M12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm0 3c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-8-.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 .75.75v.81c-.02.16-.1.58-.5.92-.33.29-.86.52-1.75.52C4 13 4 11.5 4 11.5v-.75ZM6.25 9a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm4.25-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.07 3.98c-.03.15-.1.33-.2.52h.27c.83 0 1.5-.67 1.5-1.5a1 1 0 0 0-1-1h-.67c.11.23.17.48.17.75V11.57a1.84 1.84 0 0 1-.07.4ZM4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM3 6.5C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-7Z",
    FILLED : "M4.5 4A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11ZM12 8.5c0-.28.22-.5.5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1ZM4 10.75c0-.41.34-.75.75-.75h3a.75.75 0 0 1 .75.75v.81c-.02.16-.1.58-.5.92-.33.29-.86.52-1.75.52C4 13 4 11.5 4 11.5v-.75ZM6.25 9a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm4.25-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1.07 3.98a2.26 2.26 0 0 0 .07-.41V10.75c0-.27-.06-.52-.17-.75H10a1 1 0 0 1 1 1c0 .83-.67 1.5-1.5 1.5h-.26c.1-.2.16-.37.2-.52Z"
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